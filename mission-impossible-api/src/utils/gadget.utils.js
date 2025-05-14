export const generateCodename = () => {
  const names = ['The Nightingale', 'The Kraken', 'Ghost Walker', 'Black Mamba'];
  return names[Math.floor(Math.random() * names.length)];
};

export const generateSuccessRate = () => Math.floor(Math.random() * 51) + 50;

export const generateCode = () => Math.random().toString(36).substring(2, 8).toUpperCase();
