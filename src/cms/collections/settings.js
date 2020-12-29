const Settings = {
  name: 'settings',
  label: 'Configurações',
  media_folder: '',
  public_folder: '',
  sortable_fields: [],
  editor: { preview: false },
  files: [
    {
      file: 'content/profile/index.md',
      label: 'Perfil',
      name: 'profile',
      fields: [
        {
          label: 'key',
          name: 'key',
          widget: 'hidden',
          default: 'profile'
        },
        { label: 'Título', name: 'title', widget: 'string' },
        { label: 'Subtítulo', name: 'subtitle', widget: 'string' },
        { label: 'Descrição', name: 'text', widget: 'string' },
        { label: 'Imagem', name: 'image', widget: 'image' },
        {
          label: 'Ferramentas',
          name: 'tools',
          widget: 'list',
          fields: [
            { label: 'Rótulo', name: 'label', widget: 'string' },
            { label: 'Imagem', name: 'image', widget: 'image' }
          ]
        }
      ]
    },
    {
      file: 'content/metadata/index.yaml',
      label: 'Metadata',
      name: 'metadata',
      fields: [
        { label: 'Título', name: 'title', widget: 'string' },
        { label: 'Título curto', name: 'shortTitle', widget: 'string' },
        {
          label: 'Descrição',
          name: 'description',
          widget: 'text'
        },
        { label: 'Behance', name: 'behance', widget: 'string' },
        { label: 'Instagram', name: 'instagram', widget: 'string' },
        { label: 'URL', name: 'siteUrl', widget: 'string' },
        { label: 'Favicon', name: 'favicon', widget: 'image' },
        {
          label: 'Cores do PWA',
          name: 'colors',
          widget: 'object',
          fields: [
            { label: 'background', name: 'background', widget: 'color' },
            { label: 'highlight', name: 'highlight', widget: 'color' }
          ]
        },
        {
          label: 'Tracking',
          name: 'tracking',
          widget: 'object',
          fields: [
            {
              label: 'Tracker',
              name: 'which',
              widget: 'select',
              options: [
                { label: 'Nenhum', value: 'none' },
                { label: 'Google Analytics', value: 'analytics' },
                { label: 'Google Tag Manager', value: 'gtm' }
              ]
            },
            { label: 'id', name: 'id', widget: 'string' }
          ]
        }
      ]
    }
  ]
}

export default Settings
