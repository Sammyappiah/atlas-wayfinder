echo "========== BUILD =========="
npm run build

echo
echo "========== OLD BRANDING =========="
grep -RniE "Atlas English|World Bound|Atlas Finder" src || echo "✓ Clean"

echo
echo "========== EXTERNAL IMAGES =========="
grep -RniE "unsplash|pexels|pixabay" src || echo "✓ Clean"

echo
echo "========== PLACEHOLDERS =========="
grep -RniE "Lorem|placeholder|Coming Soon|example|demo|dummy" src || echo "✓ Clean"

echo
echo "========== SOCIAL =========="
grep -RniE "youtube|facebook|instagram|linkedin|whatsapp" src

echo
echo "========== TAGLINE =========="
grep -R "Study • Work • Explore" src

echo
echo "========== COMPLETE =========="
