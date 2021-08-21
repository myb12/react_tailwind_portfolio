export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'date',
            title: 'Date',
            type: 'datetime',
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'projectType',
            title: 'Project Type',
            type: 'string',
            options: {
                list: [
                    {
                        value: "personal",
                        title: "Personal",
                    },
                    {
                        value: "professional",
                        title: "Professional",
                    },
                ]
            }
        },
        {
            name: 'live',
            title: 'Live Link',
            type: 'text',
        },
        {
            name: 'github',
            title: 'GitHub Link',
            type: 'text',
        },

    ],
}