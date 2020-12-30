import { init, registerPreviewTemplate as template } from 'netlify-cms-app'

import Projects from './collections/projects'
import Settings from './collections/settings'
import ProjectItemPreview from './templates/project-item'

import '../theme/theme-base.css'
import 'typeface-quicksand'

template('projects', ProjectItemPreview)

init({
  config: {
    backend: {
      name: 'github',
      repo: 'etdbmm/etdbm.com',
      branch: 'main',
      commit_messages: {
        create: 'feat: create “{{slug}}”',
        update: 'feat: update “{{slug}}”',
        delete: 'refactor: delete “{{slug}}”',
        uploadMedia: 'feat: upload “{{path}}” [skip ci]',
        deleteMedia: 'refactor: delete “{{path}}” [skip ci]'
      }
    },
    local_backend: {
      url: 'http://localhost:8000/api/v1'
    },
    media_folder: 'static/assets',
    public_folder: 'assets',
    locale: 'pt',
    collections: [Projects, Settings]
  }
})
