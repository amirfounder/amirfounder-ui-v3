export const Constants = Object.freeze({
  REGEX: {
    PATHNAMES: {
      ABOUT: /\/about/,
      BLOG: /\/blog/,
      PROJECTS: /\/projects/,
      RESEARCH: /\/research/,
      TOOLS: /\/tools/
    }
  },
  ATTENDANCE_VALUES: [
    'Present',
    'Late',
    'Absent',
    'Excused'
  ],
  COOKIE_NAMES: {
    MEMBERS: 'members'
  },
  PATHS: {
    HOME: '/',
    ABOUT: '/about',
    BLOG: '/blog',
    LEARN: '/learn',
    PROJECTS: '/projects',
    RESEARCH: '/research',
    TOOLS: '/tools',
    CONTACT: '/contact',
    ABOUT_VISION: '/about/vision',
    ABOUT_RESUME: '/about/resume',
    ABOUT_INTERESTS: '/about/interests',
    TOOLS_STANDUP_TRACKER: '/tools/standup-tracker'
  },
  OBJECTS: {
    EMPTY_MEMBER_OBJECT: {
      id: '',
      firstName: '',
      lastName: '',
      attendance: 'Present',
      last24Hours: '',
      next24Hours: '',
      blockers: '',
    }
  }
})