# Header Component

A responsive header component with announcement bar, navigation, and shopping cart badge.

## Components

### Header
The header includes:
- Animated announcement bar with repeating message and icons
- Logo on the left
- Navigation menu with links (HOME, ABOUT, SERVICES, PROJECTS, FOR DESIGNERS, CONTACT)
- Shopping bag indicator with item count

### Hero
The hero section includes:
- Large heading with decorative script font
- Subtitle
- Call-to-action button
- Description text
- Featured images with rounded corners

## Usage

```jsx
import { Header, Hero } from './components';

function App() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
```

## Styling

The components use the following colors:
- Background: `#F1EDE9`
- Text/Borders: `#0D0E10`
- White: `#FFF`

### Fonts
- **Neue Montreal**: Primary font for body text and navigation
- **Sharpe PERSONAL**: Used for logo and subtitle
- **Pinyon Script**: Decorative font for the first letter of the hero title
- **Tomato Grotesk**: Used for the cart count

## Responsive Design

The header and hero components are fully responsive with breakpoints at:
- 1200px: Tablet layout adjustments
- 768px: Mobile layout with hidden navigation menu
