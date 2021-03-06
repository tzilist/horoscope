// Generated by CoffeeScript 1.10.0
(function() {
  var ZodiacArray, birthdayIsntValid, getSign, getZodiac, handleMonths, monthDayRange, yearIsntValid;

  getSign = function(month, day, overrideErrors) {
    var errorMessage;
    if (overrideErrors == null) {
      overrideErrors = false;
    }
    if (overrideErrors) {
      if (birthdayIsntValid(month, day)) {
        return null;
      } else {
        return handleMonths[month](day);
      }
    } else {
      if (birthdayIsntValid(month, day)) {
        errorMessage = 'Horoscope.js/getSign(): month should be numbers 1-12 and days should be numbers between 1-31';
        throw new Error(errorMessage);
      } else {
        return handleMonths[month](day);
      }
    }
  };

  handleMonths = {
    1: function(day) {
      if (day <= 19) {
        return 'Capricorn';
      } else {
        return 'Aquarius';
      }
    },
    2: function(day) {
      if (day <= 18) {
        return 'Aquarius';
      } else {
        return 'Pisces';
      }
    },
    3: function(day) {
      if (day <= 20) {
        return 'Pisces';
      } else {
        return 'Aries';
      }
    },
    4: function(day) {
      if (day <= 19) {
        return 'Aries';
      } else {
        return 'Taurus';
      }
    },
    5: function(day) {
      if (day <= 20) {
        return 'Taurus';
      } else {
        return 'Gemini';
      }
    },
    6: function(day) {
      if (day <= 20) {
        return 'Gemini';
      } else {
        return 'Cancer';
      }
    },
    7: function(day) {
      if (day <= 22) {
        return 'Cancer';
      } else {
        return 'Leo';
      }
    },
    8: function(day) {
      if (day <= 22) {
        return 'Leo';
      } else {
        return 'Virgo';
      }
    },
    9: function(day) {
      if (day <= 22) {
        return 'Virgo';
      } else {
        return 'Libra';
      }
    },
    10: function(day) {
      if (day <= 22) {
        return 'Libra';
      } else {
        return 'Scorpio';
      }
    },
    11: function(day) {
      if (day <= 21) {
        return 'Scorpio';
      } else {
        return 'Sagittarius';
      }
    },
    12: function(day) {
      if (day <= 21) {
        return 'Sagittarius';
      } else {
        return 'Capricorn';
      }
    }
  };

  monthDayRange = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
  };

  birthdayIsntValid = function(m, d) {
    if (typeof m !== 'number' || typeof d !== 'number' || m < 1 || m > 12 || d < 1 || d > monthDayRange[m]) {
      return true;
    } else {
      return false;
    }
  };

  getZodiac = function(year, overrideErrors) {
    var errorMessage;
    if (overrideErrors == null) {
      overrideErrors = false;
    }
    if (overrideErrors) {
      if (yearIsntValid(year)) {
        return null;
      } else {
        return ZodiacArray[year % 12];
      }
    } else {
      if (yearIsntValid(year)) {
        errorMessage = 'Year isnt valid';
        throw new Error(errorMessage);
      } else {
        return ZodiacArray[year % 12];
      }
    }
  };

  ZodiacArray = ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat'];

  yearIsntValid = function(year) {
    if (!year || typeof year !== 'number' || year.toString().length !== 4) {
      return true;
    } else {
      return false;
    }
  };

  module.exports.getSign = getSign;

  module.exports.getZodiac = getZodiac;

}).call(this);
