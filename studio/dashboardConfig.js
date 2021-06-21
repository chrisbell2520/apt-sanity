export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60d0c836e50af8b82267091f',
                  title: 'Sanity Studio',
                  name: 'apt-sanity-studio',
                  apiId: '800b9e1b-8a2b-4d16-a764-ed39d8633b51'
                },
                {
                  buildHookId: '60d0c836d668d82104044af5',
                  title: 'Landing pages Website',
                  name: 'apt-sanity',
                  apiId: '935a491d-772a-4b61-b501-fbb963f4ab7f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrisbell2520/apt-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://apt-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
