const Projects = {
  name: 'projects',
  label: 'Projetos',
  label_singular: 'projeto',
  folder: 'content/projetos',
  create: true,
  media_folder: '',
  public_folder: '',
  sortable_fields: ['title', 'date'],
  path: '{{slug}}/index',
  fields: [
    { label: 'key', name: 'key', widget: 'hidden', default: 'project-item' },
    { label: 'Título', name: 'title', widget: 'string' },
    {
      label: 'Data',
      name: 'date',
      widget: 'datetime',
      format: 'YYYY-MM-DD',
      date_format: 'DD-MM-YYYY',
      time_format: ''
    },
    { label: 'Cliente', name: 'client', widget: 'string' },
    { label: 'Função', name: 'work', widget: 'string' },
    {
      label: 'Categoria',
      name: 'role',
      widget: 'select',
      options: ['branding', 'design gráfico', 'ux', 'embalagem']
    },
    { label: 'Imagem em destaque', name: 'image', widget: 'image' },
    { label: 'Descrição', name: 'text', widget: 'text' },
    {
      label: 'Conteúdo',
      name: 'content',
      widget: 'list',
      field: { label: 'Imagem', name: 'image', widget: 'image' }
    }
  ]
}

export default Projects
