export const expertComponents: Record<string, React.ComponentType<any>> = {
  KAS: () =>
    import("../(default)/experts/expertPages/KAS").then((mod) => (
      <mod.default />
    )),
  BobMalek: () =>
    import("../(default)/experts/expertPages/BobMalek").then((mod) => (
      <mod.default />
    )),
  LibradoMancilla: () =>
    import("../(default)/experts/expertPages/LibradoMancilla").then((mod) => (
      <mod.default />
    )),
  RicardoMejia: () =>
    import("../(default)/experts/expertPages/RicardoMejia").then((mod) => (
      <mod.default />
    )),
  AlexCapello: () =>
    import("../(default)/experts/expertPages/AlexCapello").then((mod) => (
      <mod.default />
    )),
  SavannahLarmon: () =>
    import("../(default)/experts/expertPages/SavannahLarmon").then((mod) => (
      <mod.default />
    )),
  RicardoEsquivel: () =>
    import("../(default)/experts/expertPages/RicardoEsquivel").then((mod) => (
      <mod.default />
    )),
  JaimeGarcia: () =>
    import("../(default)/experts/expertPages/JaimeGarcia").then((mod) => (
      <mod.default />
    )),
  BanChoi: () =>
    import("../(default)/experts/expertPages/BanChoi").then((mod) => (
      <mod.default />
    )),
  DanielVatcher: () =>
    import("../(default)/experts/expertPages/DanielVatcher").then((mod) => (
      <mod.default />
    )),
  ChadKrieger: () =>
    import("../(default)/experts/expertPages/ChadKrieger").then((mod) => (
      <mod.default />
    )),
  WeiChao: () =>
    import("../(default)/experts/expertPages/WeiChao").then((mod) => (
      <mod.default />
    )),
  ChristianDerManuelian: () =>
    import("../(default)/experts/expertPages/ChristianDerManuelian").then(
      (mod) => <mod.default />
    ),
  ElisaCapello: () =>
    import("../(default)/experts/expertPages/ElisaCapello").then((mod) => (
      <mod.default />
    )),
  JorgeGarcia: () =>
    import("../(default)/experts/expertPages/JorgeGarcia").then((mod) => (
      <mod.default />
    )),
  Malcolm: () =>
    import("../(default)/experts/expertPages/Malcolm").then((mod) => (
      <mod.default />
    )),
};
