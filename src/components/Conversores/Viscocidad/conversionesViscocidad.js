export const conversionesViscocidad = {
  poise: {
    cp: 100,                    // 1 poise = 100 cp
    lb_per_ft_s: 6.72e-2,       // 1 poise = 6.72 x 10^-2 lb/ft*s
    kg_per_m_s: 0.1,            // 1 poise = 0.1 kg/m*s
    lb_per_fl_oz_s: 242,        // 1 poise = 242 lb/ft*s
    m2_per_s: 1e-3,             // 1 poise = 1 x 10^-3 m^2/s
  },
  cp: {
    poise: 0.01,                // 1 cp = 0.01 poise
    lb_per_ft_s: 6.72e-4,       // 1 cp = 6.72 x 10^-4 lb/ft*s
    kg_per_m_s: 0.001,          // 1 cp = 0.001 kg/m*s
    lb_per_fl_oz_s: 2.42,       // 1 cp = 2.42 lb/ft*s
    m2_per_s: 1e-4,             // 1 cp = 1 x 10^-4 m^2/s
  },
  lb_per_ft_s: {
    poise: 14.9,                // 1 lb/ft*s = 14.9 poise
    cp: 1490,                   // 1 lb/ft*s = 1490 cp
    kg_per_m_s: 1.488,          // 1 lb/ft*s = 1.488 kg/m*s
    m2_per_s: 1.488e-3,         // 1 lb/ft*s = 1.488 x 10^-3 m^2/s
  },
  kg_per_m_s: {
    poise: 10,                  // 1 kg/m*s = 10 poise
    cp: 1000,                   // 1 kg/m*s = 1000 cp
    lb_per_ft_s: 0.00672,       // 1 kg/m*s = 0.00672 lb/ft*s
    m2_per_s: 1e-3,             // 1 kg/m*s = 1 x 10^-3 m^2/s
  },
  m2_per_s: {
    poise: 1000,                // 1 m^2/s = 1000 poise
    cp: 100000,                 // 1 m^2/s = 100000 cp
    lb_per_ft_s: 672,           // 1 m^2/s = 672 lb/ft*s
    kg_per_m_s: 1000,           // 1 m^2/s = 1000 kg/m*s
  },
};

