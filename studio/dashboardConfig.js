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
                  buildHookId: '5e99cfaea193a81f87d0eeaf',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-s5hfemnf',
                  apiId: '132a33fe-8b0f-4773-b616-bab8312308cf'
                },
                {
                  buildHookId: '5e99cfaeeb95cb018f9cd8ef',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ee64a52s',
                  apiId: '58df8976-9675-4053-825e-bad8c927158f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dennisdeaf/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ee64a52s.netlify.app', category: 'apps'}
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
