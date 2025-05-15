export const serviceComponents: Record<string, React.ComponentType<any>> = {
  threeD: () =>
    import("../(noFooter)/services/individualPages/threeD").then((mod) => (
      <mod.default />
    )),
  accident_recon: () =>
    import("../(noFooter)/services/individualPages/accident_recon").then(
      (mod) => <mod.default />
    ),
  animations: () =>
    import("../(noFooter)/services/individualPages/animations").then((mod) => (
      <mod.default />
    )),
  biomechanics: () =>
    import("../(noFooter)/services/individualPages/biomechanics").then(
      (mod) => <mod.default />
    ),
  human_factors: () =>
    import("../(noFooter)/services/individualPages/human_factors").then(
      (mod) => <mod.default />
    ),
  premises: () =>
    import("../(noFooter)/services/individualPages/premises").then((mod) => (
      <mod.default />
    )),
  cdr: () =>
    import("../(noFooter)/services/individualPages/cdr").then((mod) => (
      <mod.default />
    )),
  simulations: () =>
    import("../(noFooter)/services/individualPages/simulations").then((mod) => (
      <mod.default />
    )),
  criminal: () =>
    import("../(noFooter)/services/individualPages/criminal").then((mod) => (
      <mod.default />
    )),
};
