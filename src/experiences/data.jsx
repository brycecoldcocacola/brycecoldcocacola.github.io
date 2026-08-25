export const experiences = {
  'modeling-simulation': {
    name: 'Modeling & Simulation Developer',
    date: '2015 - 2019',
    org: 'The Aerospace Corporation',
    dept: 'Modeling & Simulation Department',
    icon: 'ms',
    description:
      'Developed modeling and simulation tools for aerospace systems analysis.',
    article: React.lazy(() => import('./ModelingSimulation')),
  },
  'web-graphics': {
    name: 'Web & Graphics Software Developer',
    date: '2016 - 2018',
    org: 'The Aerospace Corporation',
    dept: 'Visualization & Immersive Technology Department',
    icon: 'web',
    description:
      'Built web-based visualization and graphics software for immersive technology applications.',
    article: React.lazy(() => import('./WebGraphics')),
  },
};
