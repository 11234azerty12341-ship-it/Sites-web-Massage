export interface Service {
  title: string
  description: string
  icon: 'Heart' | 'Waves'
}

export const servicesData: Service[] = [
  {
    title: 'Massage Intuitif',
    description: 'Un massage personnalisé qui s\'adapte à vos besoins du moment.',
    icon: 'Heart',
  },
  {
    title: 'Massage Californien',
    description: 'Mouvements fluides et enveloppants pour une relaxation profonde.',
    icon: 'Waves',
  },
]
