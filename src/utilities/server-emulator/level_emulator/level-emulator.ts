import {getDomainOfDataByKey} from "recharts/types/util/ChartUtils";

type Tick = {
  value: number,
  time: number,
};

export class ObjectEmu {
  private readonly _kp: number;
  private readonly _t: number;
  private _lastTick: Tick;
  public output: number;
  public input: number;
  private _cycle: NodeJS.Timeout;

  constructor(t: number, kp: number = 1) {
    this._kp = kp;
    this._t = t;
    this._lastTick = {value: 0, time: Date.now()};
    this.output = 1;
    this.input = 1;
    this._cycle = setInterval(() => clearInterval(this._cycle), 1);
  }

  private _tick = (): void => {
    const now = Date.now();
    const timeDiff = (now - this._lastTick.time) / 1000;
    this.output = (this._kp * this.input + this._t * this._lastTick.value / timeDiff) / (1 + this._t / timeDiff);
    this._lastTick = {value: this.output, time: now};
    console.log(this.output);
  }

  public start = (): void => {
    this._cycle = setInterval(this._tick, 1000);
  }
  public stop = (): void => {
    clearInterval(this._cycle);
  }
}

export class PiControllerEmu {
  private _autoMode: boolean;
  private _autoModeTarget: number;
  private _manualModeTarget: number;
  private _kp: number;
  private _ki: number;
  private _deadZone: number;
  private _cycle: NodeJS.Timeout;
  private _lastTick: {input: number, output: number, time: number};
  public input: number;
  public output: number;
  public e: number;

  constructor() {
    this._autoMode = true;
    this._kp = 1;
    this._ki = 1;
    this._deadZone = 1;
    this._autoModeTarget = 50;
    this._manualModeTarget = 50;
    this.input = 0;
    this.output = 0;
    this._cycle = setInterval(() => clearInterval(this._cycle), 1);
    this._lastTick = {input: 0, output: 0, time: Date.now()};
    this.e = 0;
  }

  private _countError = () => {
    if (this._autoMode) {
      this.e = this._autoModeTarget - this.input;
    } else {
      this.e = this._manualModeTarget - this.input;
    }
  }
  private _countOutput = (): number => {
    const timeDiff = Date.now() - this._lastTick.time;
    return (this.e - this._lastTick.input) * this._kp + (this.e * this._kp * timeDiff/ 1000) / this._ki + (this._lastTick.output);
  }
  private _tick = (): void => {
    this._countError();
    this.output = this._countOutput();
    this._lastTick.output = this.output;
    this._lastTick.input = this.e;
    this._lastTick.time = Date.now();
  }
  public start = (): void => {
    this._cycle = setInterval(this._tick, 1000);
  }
  public stop = (): void => {
    clearInterval(this._cycle);
  }
}

type ParamBlock = {object: ObjectEmu, regulator: PiControllerEmu};

export class MainControlEmu {
  private _cycle: NodeJS.Timeout;
  private _paramBlocks: ParamBlock[];

  constructor(props: ParamBlock[]) {
    this._paramBlocks = [...props];
    this._cycle = setInterval(() => clearInterval(this._cycle), 1);
  }
  private _tick = (): void => {
    this._paramBlocks.map(({object, regulator}) => {
      object.input = regulator.output;
      regulator.input = object.output;
    });
  }

  public start = (): void => {
    this._paramBlocks.forEach(({object, regulator}) => {
      object.start();
      regulator.start();
    });
    this._cycle = setInterval(this._tick, 1000);
  }
  public stop = (): void => {
    clearInterval(this._cycle);
  }
}