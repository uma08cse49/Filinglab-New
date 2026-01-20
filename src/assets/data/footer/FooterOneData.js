const menuData = [
    {
        col: 'col-6',
        parentClass: 'one',
        items: [
            {
                title: 'Products 🔥',
                items: [
                    {
                        label: 'STARTUP',
                        subItems: [
                            { label: 'Private Limited Company', href: '#' },
                            { label: 'Limited Liability Partnership', href: '#' },
                            { label: 'One Person Company', href: '#' },
                            { label: 'Section 8 Company Registration', href: '#' },
                            { label: 'Nidhi Company Registration', href: '#' },
                            { label: 'Producer Company Registration', href: '#' },
                            { label: 'MSME Registration', href: '#' },
                        ]
                    },
                    {
                        label: 'GOVERNMENT REGISTRATION',
                        subItems: [
                            { label: 'FSSAI Registration', href: '#' },
                            { label: 'IEC Registration', href: '#' },
                            { label: 'Trademark Registration', href: '#' },
                            { label: 'DSC Registration', href: '#' }
                        ]
                    },
                    // {
                    //     label: 'Payment Solutions',
                    //     subItems: [
                    //         { label: 'COMPLIANCE & TAX', href: '#' },
                    //         { label: 'Compliance Pvt Ltd', href: '#' },
                    //         { label: 'Compliance LLP', href: '#' },
                    //         { label: 'GST Registration', href: '#' }
                    //     ]
                        
                    // }
                ]
            }
        ]
    },
    {
        col: 'col-6',
        parentClass: 'two',
        items: [
            {
                title: 'Resources ❇️',
                items: [
                    
                    {
                        label: 'BIS & CDSCO',
                        subItems: [
                            { label: 'BIS Certification', href: '#' },
                            { label: 'BIS FMCS Certification', href: '#' },
                            { label: 'BIS CRS Certification', href: '#' },
                            { label: 'ISI Mark Certification', href: '#' },
                            { label: 'CDSCO Registration', href: '#' },
                            { label: 'Medical Device Registration', href: '#' }
                        ]
                        
                    }
                ]
            },
            {
                title: 'Developer Docs 📈',
                items: [
                    {
                        label: 'COMPLIANCE & TAX', 
                       subItems: [
                            { label: 'COMPLIANCE & TAX', href: '#' },
                            { label: 'Compliance Pvt Ltd', href: '#' },
                            { label: 'Compliance LLP', href: '#' },
                            { label: 'GST Registration', href: '#' }
                        ]
                        
                    },
                    // { label: 'Changelog', href: '#' },
                    // { label: 'Community Forum', href: '#' }
                ]
            }
        ]
    },
    {
        col: 'col-12',
        parentClass: 'three',
        items: [
            {
                title: 'Company 💎',
                items: [
                    {
                        label: null, // Represents a section without a main label
                        subItems: [
                            { label: 'About', href: '#' },
                            { label: 'What We Do', href: '#' },
                            { label: 'Contact Us', href: '#' },
                            // { label: 'Careers', href: '#', badge: 'Hiring' }
                        ]
                    }
                ]
            },
            {
                title: 'Why Choose 🌟',
                items: [
                    { label: 'Customer Stories', href: '#' },
                    { label: 'Feedbacks', href: '#' }
                ]
            }
        ]
    }
];

export default menuData;
