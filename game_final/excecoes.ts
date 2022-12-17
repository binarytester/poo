class OpcaoInvalida extends Error {
  constructor(message: string) {
    super(message);
  }
}

class AplicacaoError extends Error {
  constructor(message: string) {
    super(message);
  }
}

class idInvalidoError extends Error {
  constructor(message: string) {
    super(message);
  }
}

class jogadorNaoEncontrado extends idInvalidoError {
  constructor(message: string) {
    super(message);
  }
}

class jogadorJaCadastrado extends Error {
  constructor(message: string) {
    super(message);
  }
}

export {
  OpcaoInvalida,
  AplicacaoError,
  idInvalidoError,
  jogadorNaoEncontrado,
  jogadorJaCadastrado,
};
