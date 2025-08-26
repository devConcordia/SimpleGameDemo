
export default {
	
	PT_BR: {
		///
		CONFIRM: "Confirmar",
		CONTINUE: "Continuar",
		END_GAME: "Fim de Jogo",
		NAME: "Nome",
		NEW_PLAYERS: "Novos Jogadores",
		NEXT: "Próximo",
		SELECT_TARGET: 'Selecione um alvo',
		SETTINGS: "Configurações",
		START_GAME: "Iniciar Jogo",
		
		///
		roles: {
			Boitata: { name: 'Boitatá', description: 'Ataque os outros jogadores', about: 'Vive a maior parte do tempo junto do mar e dos rios, seu nome que quer dizer coisa de fogo. Não se vê outra coisa senão um facho cintilante correndo para ali e arrebata rapidamente os desavisados.' },
			Capelobo: { name: 'Capelobo', description: 'Ataque os outros jogadores', about: 'Criatura noturna que se alimenta do sangue de suas presas. Sua aparença é de um home forte com cabeça de tamanduá-bandeira e patas arredondadas.' },
			Cuca: { name: 'Cuca', description: 'Ataque os outros jogadores', about:'Uma velha bruxa com cabeça de jacaré e cabelos de palha. Ela é conhecida por sequestrar crianças desobedientes, e suas noites de sono duram apenas sete anos.' },
			Iara: { name: 'Iara', description: 'Ataque os outros jogadores', about:'A sedutora sereia das águas da Amazônia, com cabelos verdes e pele morena. Ela canta melodias hipnotizantes para atrair homens para o fundo do rio.' },
			MulaSemCabeca: { name: 'Mula sem Cabeça', description: 'Ataque os outros jogadores', about:'Uma mulher amaldiçoada que, por ter se apaixonado por um padre, foi transformada em uma mula que galopa com fogo no lugar da cabeça. Seu relinchar assusta quem a vê.' },
			
			Saci: { name: 'Saci', description: 'Divirta-se', about:'Um ser travesso de uma perna só que usa um gorro vermelho e vive na floresta. Gosta de aprontar, esconde objetos, dá nós em crinas de cavalo e se locomove em redemoinhos de vento.' },
			
			Paje: { name:'Pajé', description: ' ... o que ele pode fazer?', about: 'São curandeiros, tidos como portadores de poderes ocultos, ou orientadores espirituais.' }, 
			Priest: { name:'Padre', description: ' ... o que ele pode fazer?', about: 'Sarcedote da comunidade, guian os fieis no caminho da fé.' }, 
			Nun: { name:'Freira', description: 'Escolha um jogador para proteger essa noite', about: 'Consagradas a fé, ajudam a comunidade no caminho espiritual.' }, 
			Hunter: { name:'Caçadora', description: 'Você possui um cão que morrerá no seu lugar', about: 'Aventura-se de noite, na companhia de cão, em busca de animais selvagens.' },
			Fisher: { name:'Pescador', description: 'Você pode jogar sua rede em outro jogador, a ação desse jogador será cancelada.', about: 'De madrugada, sai para lançar sua rede no rio.' }, 
			Doctor: { name:'Medica', description: 'Se você visitar um jogador ferido nesse turno, evitando sua morte', about: 'Cuida da saude da comunidade' }, 
			Journalist: { name:'Jornalista', description: 'Pode investigar se um jogador foi morto por outro', about: 'Mantém a comunidade informado com os acontecimentos locais.' }, 
			Cangaceiro: { name:'Cangaceiro', description: 'Pode saquear um jogador', about: 'Sertanejo fora da lei, saquia a comunidade em busca de suas riquezas' }
		},
		
		///
		actions: {
			Attack: 'Atacar',
			Healing: 'Curar',
			Protection: 'Protection',
			ChangeRoles: 'Trocar Papeis'
		},
		
		///
		confirmToContinue( name ) {
			return 'Continue somente se for '+ name
		},
		
		endNight( n ) {
			
			return 'Fim da noite #'+ n;
			
		},
		
		isDead( name ) {
			
			return name +' foi morto(a)';
			
		},
		
		hasKilled( playerName, role ) {
			
			return 'O '+ role +' ('+ playerName +') foi encontrado morto'
			
		},
		
		youIs( role ) {
			return 'Você é '+ role
		},
		
	}
	
}

