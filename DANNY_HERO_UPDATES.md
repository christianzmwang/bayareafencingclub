# Coach Page Updates - Danny Image & Hero Styling

## Changes Made

### ✅ **Danny's Picture Made Full Height**
- **Special Condition**: Added conditional logic specifically for "Coach Danny"
- **Height Change**: Danny's image container changed from `h-48` to `h-full`
- **Image Dimensions**: 
  - Width: Remains 192px (w-48)
  - Height: Now full height of the card (400px)
- **Class Updates**: 
  - Container: `w-48 h-full` (instead of `w-48 h-48`)
  - Image: `w-48 h-full object-cover` (instead of `w-48 h-48 object-cover`)
- **Visual Effect**: Danny's image now spans the entire height of his profile card

### ✅ **Hero Section Background & Text Updates**
- **Background**: Changed from gradient `bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900` to solid `bg-red-700`
- **Text Color**: Changed from gradient text to solid `text-white`
- **Removed**: Black overlay (`bg-black/30`) - no longer needed with solid background
- **Clean Look**: Simple red background with white text

## Technical Implementation

### Danny's Image Logic:
```tsx
// Container class
className={coach.name === "Coach Danny" ? "w-48 h-full flex-shrink-0" : "w-48 h-48 flex-shrink-0"}

// Image dimensions
height={coach.name === "Coach Danny" ? 400 : 192}

// Image class
className={coach.name === "Coach Danny" ? "w-48 h-full object-cover" : "w-48 h-48 object-cover"}
```

### Hero Section:
```tsx
// Background
bg-red-700

// Text
text-white (simple white text)
```

## Visual Result

### Danny's Profile:
- ✅ **Prominent Display**: Danny's image now takes up the full height of his profile card
- ✅ **Better Proportions**: Larger vertical space for his image
- ✅ **Unique Presentation**: Distinguished from other coaches while maintaining consistency

### Hero Section:
- ✅ **Bold Red Background**: Strong, professional red-700 background
- ✅ **Clean White Text**: High contrast, easy to read
- ✅ **Simplified Design**: Removed unnecessary gradients and overlays

## Other Coaches:
- ✅ **Unchanged**: All other coaches maintain the standard 192x192px square images
- ✅ **Consistent**: Layout remains consistent for everyone except Danny
