# Base64 Converter App

A React Single Page Application that converts Base64 data to images or PDFs. Built with React Router for seamless navigation between different conversion tools.

## Features

- Convert Base64 strings to images with customizable width and height
- Convert Base64 strings to PDF documents
- Support for both image and PDF Base64 data formats
- User-friendly interface with drag-and-drop support
- Real-time preview for images
- Download converted files directly

## Input Format

### For Images
The Base64 image input should follow this format:
```json
{
  "body": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...",
  "width": 800,
  "height": 600
}
```

### For PDFs
The Base64 PDF input should be a plain Base64 string:
```
JVBERi0xLjQKMSAwIG9iago8PAovVGl0bGUgK...
```

## Tech Stack

- React 19+
- React Router DOM v7
- Tailwind CSS for styling
- jsPDF for PDF generation
- FileSaver for file downloads

## Installation

1. Clone the repository:
```bash
git clone https://github.com/DeepjyotiDeb/base64-tools.git
cd base64-tools
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

### Converting to Image

1. Navigate to the Image Converter page
2. Paste your Base64 data in the JSON format:
   ```json
   {
     "body": "data:image/png;base64,YOUR_BASE64_DATA",
     "width": 800,
     "height": 600
   }
   ```

### Converting to PDF

1. Navigate to the PDF Converter page
2. Paste your Base64 PDF data:
   ```
   JVBERi0xLjQKMSAwIG9iago8PAovVGl0bGUgK...
   ```
