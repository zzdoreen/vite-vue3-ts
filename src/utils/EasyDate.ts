const millisecondsOfDay = 24 * 60 * 60 * 1000;

export default class EasyDate {

  /**
   * 获取当前时分
   */
  public static getCurrentHHmm(): string {
    const date = new Date();

    const hour = date.getHours();
    let strHour = hour + '';
    if (hour >= 0 && hour <= 9) {
      strHour = '0' + hour;
    }
    const min = date.getMinutes();
    let strMin = min + '';
    if (min >= 0 && min <= 9) {
      strMin = '0' + min;
    }

    const timeStr = strHour + ':' + strMin;
    return timeStr;
  }

  public static yymmddhhmmssFormat(date: Date, seperator: string = '/'): string {
    const seperator1 = seperator;
    const seperator2 = ':';
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let strMonth = month + '';
    if (month >= 1 && month <= 9) {
      strMonth = '0' + month;
    }
    let strDay = day + '';
    if (day >= 0 && day <= 9) {
      strDay = '0' + day;
    }

    const hour = date.getHours();
    let strHour = hour + '';
    if (hour >= 0 && hour <= 9) {
      strHour = '0' + hour;
    }
    const min = date.getMinutes();
    let strMin = min + '';
    if (min >= 0 && min <= 9) {
      strMin = '0' + min;
    }
    const sec = date.getSeconds();
    let strSecond = sec + '';
    if (sec >= 0 && sec <= 9) {
      strSecond = '0' + sec;
    }
    const dateStr = date.getFullYear() + seperator1 + strMonth + seperator1 + strDay
      + ' ' + strHour + seperator2 + strMin
      + seperator2 + strSecond;
    return dateStr;
  }

  /**
   * 获取时间戳对应的年月日时分秒
   * @param timestamp 时间戳
   */
  public static transTimestampToDateStr(timestamp: string | number) {
    const date = new Date(+timestamp);
    return EasyDate.yymmddhhmmssFormat(date, '-');
  }

  /**
   * 获取当前时分秒
   */
  public static getCurrentHHmmss(): string {
    const date = new Date();

    const hour = date.getHours();
    let strHour = hour + '';
    if (hour >= 0 && hour <= 9) {
      strHour = '0' + hour;
    }
    const min = date.getMinutes();
    let strMin = min + '';
    if (min >= 0 && min <= 9) {
      strMin = '0' + min;
    }
    const second = date.getSeconds();
    let strSecond = second + '';
    if (second >= 0 && second <= 9) {
      strSecond = '0' + second;
    }
    const timeStr = strHour + ':' + strMin + ':' + strSecond;
    return timeStr;
  }

  /**
   * 年月日格式化
   * @param date 当前日期
   * @param seperator 分隔符
   */
  public static yymmddFormat(
    date: Date,
    seperator: string = '',
    yearBitNum: number = 4,
    monthBitNum: number = 2,
    dayBitNum: number = 2): string {
    const year = '' + date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let strYear = year + '';
    let strMonth = month + '';
    if (month >= 1 && month <= 9) {
      strMonth = '0' + month;
    }
    let strDay = day + '';
    if (day >= 0 && day <= 9) {
      strDay = '0' + day;
    }

    if (strYear.length > yearBitNum) {
      strYear = strYear.substring(strYear.length - yearBitNum, strYear.length);
    }

    if (strMonth.length > monthBitNum) {
      strMonth = strMonth.substring(strMonth.length - monthBitNum, strMonth.length);
    }

    if (strDay.length > dayBitNum) {
      strDay = strDay.substring(strDay.length - dayBitNum, strDay.length);
    }

    const dateStr = strYear + seperator + strMonth + seperator + strDay;
    return dateStr;
  }

  /**
   * 获取某一天之前或之后的日期字串
   * @param dateStr  起始日期字串  为空代表从今天开始
   * @param dayCount 向前或者向后的天数
   */
  public static getSomeDayDate(dateStr: string, dayCount: number) {
    const dd = new Date(dateStr);
    dd.setDate(dd.getDate() + dayCount); // 获取dayCount天后的日期
    const y = dd.getFullYear();
    const m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1; // 获取当前月份的日期，不足10补0
    const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate(); // 获取当前几号，不足10补0
    return y + '-' + m + '-' + d;
  }

  /**
   * 获取近7日日期数组
   */
  public static getRecentlySevenDaysDate() {
    const dateStrArr: string[] = [];
    for (let dayCount = -7; dayCount < 0; dayCount++) {
      const dd = new Date();
      dd.setDate(dd.getDate() + dayCount); // 获取dayCount天后的日期
      // const y = dd.getFullYear();
      const m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1; // 获取当前月份的日期，不足10补0
      const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate(); // 获取当前几号，不足10补0
      // dateStrArr.push(y + '-' + m + '-' + d);
      dateStrArr.push(m + '-' + d);
    }
    return dateStrArr;
  }

  date: Date = new Date();
  constructor(...opt: any[]) {
    let dateTemp: Date = new Date();
    if (typeof opt === 'object') {
      dateTemp = opt.length > 0 ? opt[0] : new Date();
    }
    this.date = new Date(dateTemp);
  }

  format = (fmt: string) => {
    const o: { [indexName: string]: any } = {
      'M+': this.date.getMonth() + 1, // 月份
      'd+': this.date.getDate(), // 日
      'H+': this.date.getHours(), // 小时
      'm+': this.date.getMinutes(), // 分
      's+': this.date.getSeconds(), // 秒
      'q+': Math.floor((this.date.getMonth() + 3) / 3), // 季度
      S: this.date.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (this.date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (const k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
      }
    }
    return fmt;
  };

  get lastMonth() {
    return this.lastNMonth(1);
  }

  get lastDay() {
    return this.intervalNDay(-1);
  }

  intervalNDay = (n: number) => {
    return new Date(this.date.getTime() + millisecondsOfDay * n);
  };

  /**
   * 上周1到上周日
   */
  get lastWeek() {
    return this.lastNWeek(1);
  }
  /**
   * 本周1到今天
   */
  get currentWeek() {
    return [this.mondayOfCurrentWeek, this.date];
  }
  /**
   * 本周1
   */
  get mondayOfCurrentWeek() {
    // 星期日的getDay()为0，若“当天”是星期日，这时候获取本周一，应该是获取“上周一”。
    let day = this.date.getDay() - 1;
    if (day < 0) {
      day += 7;
    }
    return new Date(this.date.getTime() - millisecondsOfDay * day);
  }
  /**
   * 上N周1到上N周日
   */
  lastNWeek = (n: number) => {
    if (n <= 0) {
      return [this.mondayOfCurrentWeek, this.date];
    }
    const start = new Date(this.mondayOfCurrentWeek.getTime() - millisecondsOfDay * 7 * n);
    const end = new Date(start.getTime() + millisecondsOfDay * 6);
    return [start, end];
  };

  /**
   * 本月第一天
   */
  get firstDayOfThisMonth() {
    const copyDate = new Date(this.date);
    copyDate.setDate(1);
    return copyDate;
  }
  /**
   * 本月1号到今天
   */
  get currentMonth() {
    return this.lastNMonth(0);
  }
  /**
   * 上N月
   */
  lastNMonth = (n: number) => {
    if (n <= 0) {
      // 本月
      return [this.firstDayOfThisMonth, this.date];
    }
    const month = this.date.getMonth();
    const startDate = new Date(this.firstDayOfThisMonth);

    startDate.setMonth(month - n); // 上N月1号

    let endDate = new Date(startDate);
    endDate.setMonth(startDate.getMonth() + 1);
    endDate = new Date(endDate.getTime() - millisecondsOfDay);

    return [startDate, endDate];
  };
  /**
   * 本月1号到今天,以年月日格式
   */
  get currentMonthYYMMDD() {
    return this.lastNMonthYYMMDD(0);
  }
  /**
   * 上N月
   */
  lastNMonthYYMMDD = (n: number) => {
    if (n <= 0) {
      // 本月
      return [
        this.transformTimestampToyyMMdd(new Date(this.date.getFullYear(), this.date.getMonth(), 1)),
        this.transformTimestampToyyMMdd(this.date)];
    }
  };

  /**
   * 上N个季度
   */
  lastNQuarter = (n: number) => {
    if (n <= 0) {
      // 本季度
      return [this.firstDayOfThisQuarter, this.date];
    }
    const startDate = this.firstDayOfThisQuarter;
    startDate.setMonth(startDate.getMonth() - 3 * n);

    let endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 3);
    endDate = new Date(endDate.getTime() - millisecondsOfDay);
    return [startDate, endDate];
  };
  get currentQuarter() {
    return this.lastNQuarter(0);
  }
  /**
   * 本季度第一天
   */
  get firstDayOfThisQuarter() {
    const month = this.date.getMonth();
    const copyDate = new Date(this.date);

    copyDate.setMonth(month);
    copyDate.setDate(1);
    return copyDate;
  }

  lastNYear = (n: number) => {
    if (n <= 0) {
      // 今年
      return [this.firstDayOfThisYear, this.date];
    }
    const startDate = this.firstDayOfThisYear;
    startDate.setFullYear(startDate.getFullYear() - n);

    const endDate = new Date(startDate);
    endDate.setMonth(11);
    endDate.setDate(31);
    return [startDate, endDate];
  };

  get firstDayOfThisYear() {
    const copyDate = new Date(this.date);
    copyDate.setMonth(0);
    copyDate.setDate(1);
    return copyDate;
  }

  get isFirstWeekdayOfMonth() {
    // 若今天是1号，或者今天是2号或3号且是周一（即1号，2号为周末，本月的第一个工作日），则默认显示上个月的数据
    return this.date.getDate() === 1 || (this.date.getDate() <= 3 && this.date.getDay() === 1);
  }
  get isInThreeDaysOfMonth() {
    // 若今天本月的前三天，则默认显示上个月的数据
    return this.date.getDate() <= 3;
  }

  /**
   * 最近一个月
   */
  get recentlyOneMonth() {
    const end = new Date();
    const start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
    return [this.transformTimestampToyyMMdd(start), this.transformTimestampToyyMMdd(end)];
  }

  // 转换时间戳
  transformTimestampToyyMMdd = (date: Date) => {
    const Y = date.getFullYear() + '-';
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
    // const s = date.getSeconds(); // 秒
    const dateString = Y + M + D;
    console.log('dateString', dateString); // > dateString 2020-01-10 18:52
    return dateString;
  }

  /**
   * 从当月第一天到今天
   */
  get firstDayOfCurMonthToToday() {
    const nowDate = new Date();
    const start = new Date(nowDate.setDate(1));
    const end = new Date();
    return [this.transformTimestampToyyMMdd(start), this.transformTimestampToyyMMdd(end)];
  }
}
