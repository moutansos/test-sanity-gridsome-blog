export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5e76475c4fee5df73a561387',
                  title: 'Sanity Studio',
                  name: 'test-sanity-gridsome-blog-studio',
                  apiId: '7e323762-6dc2-4bca-8629-7353e060e401'
                },
                {
                  buildHookId: '5e76475c90508df470a202d1',
                  title: 'Blog Website',
                  name: 'test-sanity-gridsome-blog-web',
                  apiId: '7851a39d-a5e6-48b4-8adf-012cc3f9072e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/moutansos/test-sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://test-sanity-gridsome-blog-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
