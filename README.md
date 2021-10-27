# Cadastro de carros

**RF** =>
Deve ser possível cadastrar um novo carro.
Deve ser possível listar todas as categorias.

**RN** =>
Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar a placa de um carro já cadastrado.
O carro deve ser cadastrado, por padrão, com disponibilidade.
O usuário responsável pelo cadastro dever ser um usuário administrador.

# Listagem de carros

**Rf** =>
Deve ser possível listar todos os carros diponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da catagoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN** =>
o usuário não precisa está logado no sistema.

# Cadastro de Especificação no carro

**RF** =>
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**RN** =>
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação j'existente para o mesmo carro.
O usuário responsável pelo cadastro dever ser um usuário administrador.

# Cadastro de imagens do carro

**RF** =>
Deve ser possível cadastrar a imagem do carro.
Deve ser possível listar todos os carros.

**RNF** =>
Utilizar o multer para fazer upload dos arquivos.

**RN** =>
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro dever ser um usuário administrador.

# Aluguel de carros

**RF** =>
Deve ser possível cadastrar um aluguel.

**RN** =>
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
