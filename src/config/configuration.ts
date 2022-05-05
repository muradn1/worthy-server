
export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  mainEntry: process.env.MAIN_ENTRY || '',

  priceEngine: {
    caratPrice: parseInt(process.env.CARAT_PRICE) || 100,
    uniqueColorFactor: parseFloat(process.env.UNIQUE_COLOR_FACTOR) || 1.5,
    regularColorFactor: parseFloat(process.env.UNIQUE_COLOR_FACTOR) || 1.0,
    clarityFactor: {
      FL: parseFloat(process.env.CLARITY_FL_FACTOR) || 1.5,
      IF: parseFloat(process.env.CLARITY_IF_FACTOR) || 1.45,
      VVS: parseFloat(process.env.CLARITY_VSS_FACTOR) || 1.4,
      VS: parseFloat(process.env.CLARITY_VS_FACTOR) || 1.3,
      SI: parseFloat(process.env.CLARITY_SI_FACTOR) || 1.2,
      I1: parseFloat(process.env.CLARITY_I1_FACTOR) || 1.1,
      I2: parseFloat(process.env.CLARITY_I2_FACTOR) || 1.05
    },
    cutFixedCost: {
      ROUND: parseFloat(process.env.CUT_ROUND_FIXED_COST) || 500,
      PRINCESS: parseFloat(process.env.CUT_PRINCESS_FIXED_COST) || 400,
      EMERALD: parseFloat(process.env.CUT_EMERALD_FIXED_COST) || 300,
      ASSCHER: parseFloat(process.env.CUT_ASSCHER_FIXED_COST) || 200,
      OVAL: parseFloat(process.env.CUT_OVA_FIXED_COST) || 150,
    }
  },

  similarEngine: {
    weightFactor: 0.01,
    colorFactor: 0.4,
    clarityFactor: 0.5,
    cutFactor: 0.3,
    cutDistance: {
      ROUND: 1,
      PRINCESS: 0.8,
      EMERALD: 0.6,
      ASSCHER: 0.4,
      OVAL: 0.2
    },
    clarityDistance: {
      FL: 1,
      IF: 0.8,
      VVS: 0.6,
      VS: 0.5,
      SI: 0.3,
      I1: 0.1,
      I2: 0.05
    }
  }
});

export interface PriceEngineConfig {
  caratPrice: number,
  uniqueColorFactor: number,
  regularColorFactor: number,
  clarityFactor: {
    FL: number,
    IF: number,
    VVS: number,
    VS: number,
    SI: number,
    I1: number,
    I2: number
  },
  cutFixedCost: {
    ROUND: number
    PRINCESS: number,
    EMERALD: number,
    ASSCHER: number,
    OVAL: number
  }
}

export interface SimilarEngineConfig {
  weightFactor: number,
  colorFactor: number,
  clarityFactor: number,
  cutFactor: number,
  cutDistance: {
    ROUND: number
    PRINCESS: number,
    EMERALD: number,
    ASSCHER: number,
    OVAL: number
  },
  clarityDistance: {
    FL: number,
    IF: number,
    VVS: number,
    VS: number,
    SI: number,
    I1: number,
    I2: number
  },
}