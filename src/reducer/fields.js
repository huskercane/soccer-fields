// Expenses Reducer

// day
//   field
//     time
//       config: num
//         num'1'
//           coach:
//         num'2'

const date = new Date()
let timeSlot = Math.round(Math.abs(17 - date.getHours() + 1))
if (timeSlot > 4) {
  timeSlot = 0
}

const expensesReducerDefaultState = {
  1: { // day
    1: { // field
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    2: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    3: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    4: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    5: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    6: {
      1: { // time
        config: 6,
        1: { coach: '7B-Varas' },
        2: { coach: '7B-Arrigo' },
        3: { coach: '7B' },
        4: { coach: '7B' },
        5: { coach: '8G' },
        6: { coach: '8G' }
      },
      2: {
        config: 4,
        1: { coach: '12B' },
        2: { coach: '12B' },
        3: { coach: '12B-Tolbert' },
        4: { coach: '12B-Tolbert' },
      },
      3: {
        config: 3,
        1: { coach: '19B' },
        2: { coach: 'Open' },
        3: { coach: '19G' },
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    7: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    }

  },
  2: { // day
    1: { // field
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    2: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    3: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    4: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    5: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    6: {
      1: { // time
        config: 6,
        1: { coach: '7B Kotsias' },
        2: { coach: '7B Ruiz' },
        3: { coach: '7B Teruel' },
        4: { coach: '7B' },
        5: { coach: '8G' },
        6: { coach: '8G' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    7: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    }

  },
  3: { // day
    1: { // field
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    2: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    3: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    4: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    5: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    6: {
      1: { // time
        config: 6,
        1: { coach: '7B' },
        2: { coach: '7B Arrigo' },
        3: { coach: '7B' },
        4: { coach: '7B' },
        5: { coach: '8G' },
        6: { coach: '8G' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    7: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    }
  },
  4: { // day
    1: { // field
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    2: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    3: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    4: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    5: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    6: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    7: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    }
  },
  5: { // day
    1: { // field
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    2: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    3: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    4: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    5: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    6: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    },
    7: {
      1: { // time
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      2: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      3: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      },
      4: {
        config: 6,
        1: { coach: 'NA' },
        2: { coach: 'NA' },
        3: { coach: 'NA' },
        4: { coach: 'NA' },
        5: { coach: 'NA' },
        6: { coach: 'NA' }
      }
    }
  },
  action: {
    day: date.getDay(),
    time: timeSlot
  }
}

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
  case 'UPDATE_FIELD':
    return {
      ...state,
      action
    }
  default:
    return state
  }
}
