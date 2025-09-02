module.exports = {
  sidebar: [
    // 1. Getting Started: the absolute essentials
    {
      type: 'category',
      label: 'A New Way To Play',
      collapsible: true,
      items: [
       'play-now',
       'quickstart-interactive',
      ],
    },

    // 2. Core Engine: checks, targeting, contests
    // 3. Action & Combat Loop
    // 4. Magic & Techniques
    {
      type: 'category',
      label: 'Core Engine',
      items: [
        'creating-a-character',
        'ability-checks',
        'combat',
        'techniques',
      ],
    },

    // 5. Counters & Reactions
    {
      type: 'category',
      label: 'Counters & Reactions',
      items: [
        'counters',
      ],
    },

    // 6. Items & Magic
    {
      type: 'category',
      label: 'Items & Crafting',
      items: [
        'items-and-types',
      ],
    },

    // 7. Familiars, Pets & Summons
    {
      type: 'category',
      label: 'Familiars, Pets, and Summons',
      items: [
        'familiars',
        'pets',
        'summoned-creatures',
        'size-limits-for-familiars-pets-and-summons',
      ],
    },

    // 8. Creatures & Mythic Beings
    {
      type: 'category',
      label: 'Creatures',
      items: [
        'creatures-and-creature-tiers',
      ],
    },

    // 9. Momentum & Renown (Advanced Narrative)
    {
      type: 'category',
      label: 'Momentum & Renown',
      items: [
        'momentum',
        'renown',
      ],
    },

    // 10. Criticals & Effects
    {
      type: 'category',
      label: 'Criticals',
      items: [
        'criticals',
      ],
    },

    // 13. Licensing & Legal (bottom section only)
    {
      type: 'category',
      label: 'Licensing & Legal',
      items: [
        'SCL',
        'original-content',
        'faq',
      ],
    },
  ],

  // Custom sidebar for licensing/legal docs only (fixed paths)
  licensingSidebar: [
    'SCL',
    'original-content',
    'faq',
  ],
};
