// Token taxonomy notes
/*
  hex codes --> core | global | base tokens
   --> theme | alias tokens --> component tokens
*/

//core color breakdown
/*
1. neutral
2. functional
  a. accent - blue
  b. positive - green
  c. negative - red
  d. warning - yellow
  c. notice - orange
3. decorative
  a. gold
  b. olive
  c. lime
  d. mint
  e. cyan
  f. cobalt
  g. slate
  h. violet
  i. purple
  j. pink (swap w/ red?)
4. gradients
  indigo, rose, jade, lavender, bronze
  a. lime-40, cobalt-50
  b. cobalt-50, violet-60 
  c. yellow30, orange50
  d. red40, violet60
  e. yellow3o, orange50

  etc.
*/


export const coreColors = {
  pink: {
    "40": "#FF6E6E",
    "50": "#ff69b4",
    "60": "#FF4081",
    
  },
  green: {
    "60": '#1A6710',
    "70": '#165247',
    "80": "#283420"
    
  },
  gray: {
    "10": 'rgba(255,255,255,0.8)', 
    "20": 'rgba(255,255,255,0.6)',  
    "30": '#181818', 
    "40": 'rgba(0,0,0,0.4)',
    "50": 'rgba(0,0,0,0.5)',
    "60": 'rgba(0,0,0,0.6)',
    "70": 'rgba(0,0,0,0.8)'
  },
  white: '#FFFFFF',
  black: '#000000'
};


export const themeColors = {
  dui: {
    background:{
      primary: coreColors.green[80],
      secondary: coreColors.gray[30],
      tertiary: coreColors.black,
      quatrinary: "#",
    },
    text:{
      primary: coreColors.pink[50],
      secondary: coreColors.gray[10],
      tertiary: coreColors.gray[20],
      quatrinary: "#",
    },
    button:{},
    outline:{
      primary: coreColors.green[70],
      secondary: coreColors.green[80],
    },
    overlay:{},
    indicator:{}
  },
   lui: {
    background:{
      primary: coreColors.pink[50],
      secondary: coreColors.gray[10],
      tertiary: coreColors.gray[20],
      quatrinary: "#",
    },
    text:{
      primary: coreColors.green[80],
      secondary: coreColors.gray[30],
      tertiary: coreColors.black,
      quatrinary: "#",
    },
    button:{},
    outline:{
      primary: coreColors.pink[40],
      secondary: coreColors.pink[50],
    },
    overlay:{},
    indicator:{}
  }
};

export const componentColors = {

};
