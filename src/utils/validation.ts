
// Input validation utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateLength = (text: string, minLength: number, maxLength: number): boolean => {
  return text.length >= minLength && text.length <= maxLength;
};

export const sanitizeInput = (input: string): string => {
  // Basic HTML/script tag filtering
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .trim();
};

export const validateName = (name: string): boolean => {
  const nameRegex = /^[a-zA-Z\s-']{2,50}$/;
  return nameRegex.test(name);
};

export const validatePostTitle = (title: string): boolean => {
  return validateLength(title, 5, 200);
};

export const validatePostContent = (content: string): boolean => {
  return validateLength(content, 10, 5000);
};

export const validateQuestionContent = (question: string): boolean => {
  return validateLength(question, 10, 1000);
};

export const rateLimitCheck = (key: string, maxRequests: number = 5, windowMs: number = 60000): boolean => {
  const now = Date.now();
  const attempts = JSON.parse(localStorage.getItem(`rate_limit_${key}`) || '[]');
  
  // Remove old attempts outside the window
  const validAttempts = attempts.filter((timestamp: number) => now - timestamp < windowMs);
  
  if (validAttempts.length >= maxRequests) {
    return false;
  }
  
  // Add current attempt
  validAttempts.push(now);
  localStorage.setItem(`rate_limit_${key}`, JSON.stringify(validAttempts));
  
  return true;
};
