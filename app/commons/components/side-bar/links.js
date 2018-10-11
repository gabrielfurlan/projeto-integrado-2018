export default [
	{
		icon: '/icons/dashboard.svg', 
		label: 'Home', 
		to: '/painel',
		access: ['manager', 'analyst']
	},
	{
		icon: '/icons/puzzle.svg', 
		label: 'Projects', 
		to: '/painel/projetos',
		access: ['manager', 'analyst']
	},
	{
		icon: '/icons/conversation.svg', 
		label: 'Clientes', 
		to: '/painel/clientes',
		access: ['manager']
	},
	{
		icon: '/icons/user.svg', 
		label: 'Usuários', 
		to: '/painel/users',
		access: ['manager']
	},
	{
		icon: '/icons/configuration.svg', 
		label: 'Configuração', 
		to: '/painel/configuracao',
		access: ['manager', 'analyst']
	},
];