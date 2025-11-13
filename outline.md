# Control Systems Mastery Website - Project Outline

## File Structure
```
/mnt/okcomputer/output/
├── index.html              # Homepage with hero section and video showcase
├── videos.html             # Video library with YouTube integration
├── assistant.html          # AI chatbot page
├── about.html              # About page with instructor info
├── resources.html          # Resources page with downloads
├── contact.html            # Contact form page
├── main.js                 # Main JavaScript functionality
├── resources/              # Assets folder
│   ├── hero-bg.jpg         # Hero background image
│   ├── instructor.jpg      # Instructor photo
│   └── circuit-pattern.svg # Circuit pattern for animations
└── README.md               # Project documentation
```

## Page Breakdown

### 1. index.html - Homepage
- **Purpose**: Landing page showcasing the platform
- **Sections**:
  - Navigation bar with logo and menu
  - Hero section with animated background and CTA
  - Features showcase (61+ videos, AI assistant, etc.)
  - Statistics counter
  - Featured topics carousel
  - Social proof section
  - Newsletter signup
  - Footer with social links

### 2. videos.html - Video Library
- **Purpose**: Complete video library with search and filtering
- **Sections**:
  - Navigation bar
  - Search and filter controls
  - Video grid/list view
  - Video cards with thumbnails and metadata
  - Pagination
  - Footer

### 3. assistant.html - AI Chatbot
- **Purpose**: AI-powered learning assistant
- **Sections**:
  - Navigation bar
  - Chat interface
  - Input area (text + image upload)
  - Chat history
  - Quick action buttons
  - Footer

### 4. about.html - About Page
- **Purpose**: Instructor and platform information
- **Sections**:
  - Navigation bar
  - Instructor bio section
  - Platform story
  - Achievements
  - Mission statement
  - Footer

### 5. resources.html - Resources
- **Purpose**: Downloadable study materials
- **Sections**:
  - Navigation bar
  - Resource categories
  - Downloadable PDFs and tools
  - External links
  - Footer

### 6. contact.html - Contact
- **Purpose**: Contact form and information
- **Sections**:
  - Navigation bar
  - Contact form
  - Contact information
  - Social media links
  - FAQ section
  - Footer

## Key Features Implementation

### 1. YouTube Integration
- Fetch playlist data using YouTube Data API v3
- Display all 61 videos with thumbnails and metadata
- Embedded video player with custom controls
- Video search and filtering functionality

### 2. AI Chatbot (Gemini 2.0-flash)
- Text-based conversations
- Image analysis for circuit diagrams
- Context-aware responses
- Conversation history
- Export functionality

### 3. Responsive Design
- Mobile-first approach
- Breakpoints: 320px, 640px, 1024px, 1920px
- Touch-friendly interface
- Optimized for all devices

### 4. Interactive Elements
- Animated statistics counters
- Hover effects on cards
- Smooth page transitions
- Loading animations
- Scroll reveal effects

### 5. Performance Optimization
- Lazy loading for images
- Optimized assets
- Efficient API calls
- Caching strategies
- Progressive enhancement

## Technical Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Animations**: Anime.js, Typed.js
- **Icons**: Lucide icons
- **Fonts**: Google Fonts (Inter, JetBrains Mono)
- **APIs**: YouTube Data API v3, Google Gemini API
- **Forms**: Formspree
- **Hosting**: Static deployment

## Color Scheme
- **Primary**: Deep Blue (#1E3A8A), Electric Blue (#3B82F6)
- **Accent**: Cyan (#06B6D4)
- **Background**: Dark (#0F172A), Light (#F8FAFC)
- **Text**: High contrast for accessibility

## Content Strategy
- All 61 YouTube videos embedded and accessible
- Transcript integration where available
- AI chatbot trained on control systems content
- Downloadable resources for offline learning
- Community features for student engagement