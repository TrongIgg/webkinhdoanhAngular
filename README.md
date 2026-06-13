# webkinhdoanhAngular

Dự án Angular cho website kinh doanh sản phẩm gốm thủ công và workshop trải nghiệm.

## Chạy local

```bash
npm install
npm start
```

Mặc định Angular chạy ở `http://localhost:4200`.

## Build production

```bash
npm run build
```

Output build nằm trong `dist/webkinhdoanh-angular`.

## Deploy Vercel

Khi import repo trên Vercel:

- Framework Preset: `Angular`
- Build Command: `npm run build`
- Output Directory: `dist/webkinhdoanh-angular/browser`
- Install Command: `npm install`
