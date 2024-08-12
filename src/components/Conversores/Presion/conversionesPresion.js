export const conversionesPresion = {
  atm: {
    bar: 1.013,         // 1 atm = 1.013 bar
    Pa: 101325,         // 1 atm = 101325 Pa
    KPa: 101.325,       // 1 atm = 101.325 KPa
    psi: 14.696,        // 1 atm = 14.696 psi
    mmHg: 760,          // 1 atm = 760 mm Hg
    cmHg: 76,           // 1 atm = 76 cm Hg
    inHg: 406.8,        // 1 atm = 406.8 in Hg
    ft_lbt_in2: 14.70,  // 1 atm = 14.70 ft_lbt/in^2
    dyne_cm2: 1.013e6,  // 1 atm = 1.013 x 10^6 dyne/cm^2
    lbf_in2: 14.696,    // 1 atm = 14.696 lbf/in^2
  },
  bar: {
    atm: 0.9869,       // 1 bar = 0.9869 atm
    Pa: 100000,        // 1 bar = 100000 Pa
    KPa: 100,          // 1 bar = 100 KPa
    psi: 14.503,       // 1 bar = 14.503 psi
    mmHg: 750.1,       // 1 bar = 750.1 mm Hg
    cmHg: 75.01,       // 1 bar = 75.01 cm Hg
    inHg: 29.53,       // 1 bar = 29.53 in Hg
    ft_lbt_in2: 14.50, // 1 bar = 14.50 ft_lbt/in^2
    dyne_cm2: 1.00e6,  // 1 bar = 1.00 x 10^6 dyne/cm^2
    lbf_in2: 14.50,    // 1 bar = 14.50 lbf/in^2
  },
  Pa: {
    atm: 9.869e-6,     // 1 Pa = 9.869 x 10^-6 atm
    bar: 1e-5,         // 1 Pa = 1 x 10^-5 bar
    KPa: 0.001,       // 1 Pa = 0.001 KPa
    psi: 0.000145038, // 1 Pa = 0.000145038 psi
    mmHg: 0.00750062, // 1 Pa = 0.00750062 mm Hg
    cmHg: 0.000750062, // 1 Pa = 0.000750062 cm Hg
    inHg: 0.0002953,  // 1 Pa = 0.0002953 in Hg
    ft_lbt_in2: 0.000145, // 1 Pa = 0.000145 ft_lbt/in^2
    dyne_cm2: 0.01,   // 1 Pa = 0.01 dyne/cm^2
    lbf_in2: 0.000145, // 1 Pa = 0.000145 lbf/in^2
  },
  KPa: {
    atm: 0.009869,    // 1 KPa = 0.009869 atm
    bar: 0.01,        // 1 KPa = 0.01 bar
    Pa: 1000,         // 1 KPa = 1000 Pa
    psi: 0.1450377,  // 1 KPa = 0.1450377 psi
    mmHg: 7.50062,   // 1 KPa = 7.50062 mm Hg
    cmHg: 0.750062,  // 1 KPa = 0.750062 cm Hg
    inHg: 0.2953,    // 1 KPa = 0.2953 in Hg
    ft_lbt_in2: 0.145, // 1 KPa = 0.145 ft_lbt/in^2
    dyne_cm2: 100,   // 1 KPa = 100 dyne/cm^2
    lbf_in2: 0.145,   // 1 KPa = 0.145 lbf/in^2
  },
  psi: {
    atm: 0.068046,   // 1 psi = 0.068046 atm
    bar: 0.0689476,  // 1 psi = 0.0689476 bar
    Pa: 6894.76,     // 1 psi = 6894.76 Pa
    KPa: 6.89476,    // 1 psi = 6.89476 KPa
    mmHg: 51.7149,   // 1 psi = 51.7149 mm Hg
    cmHg: 5.17149,   // 1 psi = 5.17149 cm Hg
    inHg: 2.03602,   // 1 psi = 2.03602 in Hg
    ft_lbt_in2: 1.0, // 1 psi = 1 ft_lbt/in^2
    dyne_cm2: 6.895e5, // 1 psi = 6.895 x 10^5 dyne/cm^2
    lbf_in2: 1.0,    // 1 psi = 1 lbf/in^2
  },
  mmHg: {
    atm: 0.00131579, // 1 mm Hg = 0.00131579 atm
    bar: 0.00133322, // 1 mm Hg = 0.00133322 bar
    Pa: 133.322,     // 1 mm Hg = 133.322 Pa
    KPa: 0.133322,   // 1 mm Hg = 0.133322 KPa
    psi: 0.0193368,  // 1 mm Hg = 0.0193368 psi
    cmHg: 0.1,       // 1 mm Hg = 0.1 cm Hg
    inHg: 0.03937,   // 1 mm Hg = 0.03937 in Hg
    ft_lbt_in2: 0.01934, // 1 mm Hg = 0.01934 ft_lbt/in^2
    dyne_cm2: 1.333e4, // 1 mm Hg = 1.333 x 10^4 dyne/cm^2
    lbf_in2: 0.01934, // 1 mm Hg = 0.01934 lbf/in^2
  },
  cmHg: {
    atm: 0.0131579,  // 1 cm Hg = 0.0131579 atm
    bar: 0.0133322,  // 1 cm Hg = 0.0133322 bar
    Pa: 1333.22,     // 1 cm Hg = 1333.22 Pa
    KPa: 1.33322,    // 1 cm Hg = 1.33322 KPa
    psi: 0.193368,   // 1 cm Hg = 0.193368 psi
    mmHg: 10,        // 1 cm Hg = 10 mm Hg
    inHg: 0.3937,    // 1 cm Hg = 0.3937 in Hg
    ft_lbt_in2: 0.1934, // 1 cm Hg = 0.1934 ft_lbt/in^2
    dyne_cm2: 1.333e5, // 1 cm Hg = 1.333 x 10^5 dyne/cm^2
    lbf_in2: 0.1934, // 1 cm Hg = 0.1934 lbf/in^2
  },
  inHg: {
    atm: 0.002459,   // 1 in Hg = 0.002459 atm
    bar: 0.002519,   // 1 in Hg = 0.002519 bar
    Pa: 3386.39,     // 1 in Hg = 3386.39 Pa
    KPa: 3.38639,    // 1 in Hg = 3.38639 KPa
    psi: 0.0361,     // 1 in Hg = 0.0361 psi
    mmHg: 25.4,      // 1 in Hg = 25.4 mm Hg
    cmHg: 2.54,      // 1 in Hg = 2.54 cm Hg
    ft_lbt_in2: 0.0361, // 1 in Hg = 0.0361 ft_lbt/in^2
    dyne_cm2: 3.386e4, // 1 in Hg = 3.386 x 10^4 dyne/cm^2
    lbf_in2: 0.0361,  // 1 in Hg = 0.0361 lbf/in^2
  },
  dyne_cm2: {
    atm: 9.869e-6,   // 1 dyne/cm^2 = 9.869 x 10^-6 atm
    bar: 1e-5,       // 1 dyne/cm^2 = 1 x 10^-5 bar
    Pa: 0.1,             // 1 dyne/cm^2 = 0.1 Pa
    KPa: 0.0001,         // 1 dyne/cm^2 = 0.0001 KPa
    psi: 0.0000145,      // 1 dyne/cm^2 = 0.0000145 psi
    mmHg: 0.00075,       // 1 dyne/cm^2 = 0.00075 mm Hg
    cmHg: 0.000075,      // 1 dyne/cm^2 = 0.000075 cm Hg
    inHg: 0.00002953,    // 1 dyne/cm^2 = 0.00002953 in Hg
    ft_lbt_in2: 0.0000145, // 1 dyne/cm^2 = 0.0000145 ft_lbt/in^2
    lbf_in2: 0.0000145,  // 1 dyne/cm^2 = 0.0000145 lbf/in^2
  },
  lbf_in2: {
    atm: 0.068046,     // 1 lbf/in^2 = 0.068046 atm
    bar: 0.0689476,    // 1 lbf/in^2 = 0.0689476 bar
    Pa: 6894.76,       // 1 lbf/in^2 = 6894.76 Pa
    KPa: 6.89476,      // 1 lbf/in^2 = 6.89476 KPa
    psi: 1.0,          // 1 lbf/in^2 = 1.0 psi
    mmHg: 51.7149,     // 1 lbf/in^2 = 51.7149 mm Hg
    cmHg: 5.17149,     // 1 lbf/in^2 = 5.17149 cm Hg
    inHg: 2.03602,     // 1 lbf/in^2 = 2.03602 in Hg
    ft_lbt_in2: 1.0,   // 1 lbf/in^2 = 1.0 ft_lbt/in^2
    dyne_cm2: 6.895e5, // 1 lbf/in^2 = 6.895 x 10^5 dyne/cm^2
  },
};

