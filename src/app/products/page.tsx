'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { sampleBusinesses } from '../data/businesses';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew: boolean;
  inStock: boolean;
  tags: string[];
  businessName: string;
  businessId: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [sortBy, setSortBy] = useState<string>('최신순');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    // 모든 업체의 상품을 수집
    const allProducts: Product[] = [];
    sampleBusinesses.forEach(business => {
      if (business.products) {
        business.products.forEach(product => {
          allProducts.push({
            ...product,
            businessName: business.businessName,
            businessId: business.id
          });
        });
      }
    });
    setProducts(allProducts);
    setFilteredProducts(allProducts);
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // 카테고리 필터
    if (selectedCategory !== '전체') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // 검색어 필터
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.businessName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 정렬
    switch (sortBy) {
      case '가격낮은순':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case '가격높은순':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case '최신순':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case '인기순':
        // 임시로 랜덤 정렬 (실제로는 판매량이나 조회수 기준)
        filtered.sort(() => Math.random() - 0.5);
        break;
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, sortBy, searchTerm]);

  const categories = ['전체', '헤어케어', '스타일링', '도구', '네일케어', '네일아트', '네일도구', '베이스메이크업', '아이메이크업', '립메이크업', '메이크업도구', '스킨케어'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">상품 둘러보기</h1>
              <p className="text-gray-600 mt-2">전문가가 추천하는 뷰티 상품을 만나보세요</p>
            </div>
            <Link 
              href="/"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← 홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 필터 및 검색 */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 검색 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">검색</label>
              <input
                type="text"
                placeholder="상품명, 설명, 업체명으로 검색"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* 카테고리 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">카테고리</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* 정렬 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">정렬</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="최신순">최신순</option>
                <option value="가격낮은순">가격낮은순</option>
                <option value="가격높은순">가격높은순</option>
                <option value="인기순">인기순</option>
              </select>
            </div>
          </div>
        </div>

        {/* 상품 목록 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
              {/* 상품 이미지 */}
              <div className="aspect-square bg-gray-100 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.isNew && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                    NEW
                  </div>
                )}
                {product.originalPrice && (
                  <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% 할인
                  </div>
                )}
              </div>

              {/* 상품 정보 */}
              <div className="p-4">
                <div className="mb-2">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                  {product.name}
                </h3>
                
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {product.description}
                </p>

                <div className="mb-3">
                  <span className="text-xs text-gray-500">
                    {product.businessName}
                  </span>
                </div>

                {/* 가격 */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold text-gray-900">
                    {product.price.toLocaleString()}원
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice.toLocaleString()}원
                    </span>
                  )}
                </div>

                {/* 태그 */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 버튼 */}
                <div className="flex gap-2">
                  <Link
                    href={`/business/${product.businessId}`}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded text-sm font-medium hover:bg-gray-200 transition-colors text-center"
                  >
                    업체 보기
                  </Link>
                  <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                    구매하기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 상품이 없을 때 */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">상품을 찾을 수 없습니다</h3>
            <p className="text-gray-600 mb-4">검색 조건을 변경해보세요</p>
            <button
              onClick={() => {
                setSelectedCategory('전체');
                setSearchTerm('');
                setSortBy('최신순');
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              필터 초기화
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 