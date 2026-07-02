#!/bin/bash

echo "========== BUILD =========="
npm run build >/dev/null && echo "✅ Build OK" || echo "❌ Build FAILED"

echo
echo "========== BRAND =========="
grep -RniE "Atlas English|World Bound|Atlas Finder|Premium Education" src || echo "✅ Clean"

echo
echo "========== EMAIL =========="
grep -RniE "appiahcounselling|@gmail|@hotmail|@yahoo" src || echo "✅ Clean"

echo
echo "========== PLACEHOLDERS =========="
grep -RniE "Lorem|dummy|example|placeholder.jpg|Coming Soon" src || echo "✅ Clean"

echo
echo "========== STOCK IMAGES =========="
grep -RniE "unsplash|pexels|pixabay" src || echo "✅ Clean"

echo
echo "========== SOCIAL =========="
grep -RniE "instagram.com|facebook.com|linkedin.com" src || echo "✅ Clean"

echo
echo "========== TODO =========="
grep -Rni "TODO" src || echo "✅ None"

echo
echo "========== FINISHED =========="
