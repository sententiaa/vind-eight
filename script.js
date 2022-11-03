anime({
  targets: '.cubeloader',
  width: '100%', // -> from '28px' to '100%',
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true
});


anime({
  targets: '.backgroundpage',
  backgroundColor: `#ff0000`,
  backgroundColor: [
    {value: `#ff0000`, duration: 250, delay: 0, easing: 'linear'},
    {value: `#ffa500`, duration: 250, delay: 0, easing: 'linear'},
    {value: `#ffff00`, duration: 250, delay: 0, easing: 'linear'},
    {value: `#008000`, duration: 250, delay: 0, easing: 'linear'},
    {value: `#0000ff`, duration: 250, delay: 0, easing: 'linear'},
    {value: `#4b0082`, duration: 250, delay: 0, easing: 'linear'},
    {value: `#ff0000`, duration: 250, delay: 0, easing: 'linear'}
  ],
  loop: true
});