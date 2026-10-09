const tc = (id, module, type, scenario, steps, expected, actual, status, priority) => ({ id, module, type, scenario, steps, expected, actual, status, priority });
export const testCases = [
  tc('TC_LOGIN_001', 'Login', 'Positive', 'Valid login', 'Enter valid username and password', 'User should login successfully', 'User logged in successfully', 'PASS', 'High'),
  tc('TC_LOGIN_002', 'Login', 'Negative', 'Invalid password', 'Enter valid username and wrong password', 'Error message is shown', 'Error message shown', 'PASS', 'High'),
  tc('TC_LOGIN_003', 'Login', 'Security', 'SQL injection in username', "Enter ' OR 1=1 -- as username", 'Input rejected, no access granted', 'Input rejected', 'PASS', 'High'),
  tc('TC_REG_001', 'Registration', 'Validation', 'Invalid email format', 'Enter "abc@" in email and submit', 'Validation message shown', 'Validation message shown', 'PASS', 'Medium'),
  tc('TC_REG_002', 'Registration', 'Boundary', 'Password minimum length', 'Enter password with 7 and 8 characters', '7 rejected, 8 accepted', '7 rejected, 8 accepted', 'PASS', 'Medium'),
  tc('TC_SRCH_001', 'Search', 'Positive', 'Search existing product', 'Type "laptop" and press Enter', 'Matching products are listed', 'Matching products listed', 'PASS', 'High'),
  tc('TC_SRCH_002', 'Search', 'Negative', 'Search with no match', 'Type "zzzzzz" and press Enter', '"No results" message is shown', 'Blank page shown', 'FAIL', 'Medium'),
  tc('TC_PROD_001', 'Product', 'Validation', 'Product details display', 'Open any product page', 'Name, price, image and stock shown', 'All details shown', 'PASS', 'Medium'),
  tc('TC_CART_001', 'Cart', 'Positive', 'Add item to cart', 'Click Add to Cart on a product', 'Cart count increases by 1', 'Cart count increased', 'PASS', 'High'),
  tc('TC_CART_002', 'Cart', 'Boundary', 'Maximum quantity', 'Set quantity to 100 then 101', '101 is blocked with a message', 'Not executed', 'BLOCKED', 'Low'),
  tc('TC_CHK_001', 'Checkout', 'Negative', 'Empty address', 'Proceed to checkout without address', 'Address field validation shown', 'Order placed without address', 'FAIL', 'High'),
  tc('TC_PAY_001', 'Payment', 'Security', 'Card number masking', 'Enter a test card number', 'Number is masked after entry', 'Payment gateway unavailable', 'BLOCKED', 'High'),
  tc('TC_PROF_001', 'Profile', 'Positive', 'Update display name', 'Edit name and save', 'Name updates across the site', 'Name updated', 'PASS', 'Low'),
];
export const modules = [...new Set(testCases.map((t) => t.module))];
export const coverage = ['Login', 'Registration', 'Product Search', 'Product Filter', 'Product Details', 'Add to Cart', 'Cart Update', 'Checkout', 'Payment', 'Order Confirmation'];
