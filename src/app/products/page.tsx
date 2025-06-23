'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { sampleBusinesses } from '../data/businesses';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import StickyHeader from '../components/StickyHeader';

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
  const [isClient, setIsClient] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // 스크롤 이벤트 리스너 추가
    const handleScroll = () => {
      setIsHeaderVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Sticky Header */}
      <StickyHeader isVisible={isHeaderVisible} />
      
      {/* Header */}
      <div className="bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center transition-all duration-500"
             style={{ opacity: isClient ? 1 : 0, transform: isClient ? 'translateY(0)' : 'translateY(10px)' }}>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            <span className="block">전문가가 추천하는</span>
            <span className="block text-amber-500 mt-2">엄선된 뷰티 상품</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            시술 후에도 완벽한 스타일을 유지할 수 있도록, 최고의 제품들만 모았습니다.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="sticky top-20 bg-gray-50/80 backdrop-blur-md z-10 py-4 mb-8 transition-all duration-500 delay-100"
             style={{ opacity: isClient ? 1 : 0, transform: isClient ? 'translateY(0)' : 'translateY(10px)' }}>
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="relative flex-grow">
                <FontAwesomeIcon icon={faSearch} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="상품명, 설명, 업체명으로 검색"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow"
                />
              </div>
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full md:w-auto appearance-none bg-white border border-gray-200 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow"
                >
                  <option value="최신순">최신순</option>
                  <option value="인기순">인기순</option>
                  <option value="가격낮은순">가격 낮은 순</option>
                  <option value="가격높은순">가격 높은 순</option>
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
            {/* Category Filters */}
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 flex-shrink-0 ${
                    selectedCategory === category
                      ? 'bg-amber-500 text-white shadow'
                      : 'bg-white text-gray-700 hover:bg-amber-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
        </div>

        {/* Product List */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <Link href={`/business/${product.businessId}?product=${product.id}`} key={product.id}>
                <div
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col group cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                  style={{
                    opacity: isClient ? 1 : 0,
                    transform: isClient ? 'translateY(0)' : 'translateY(10px)',
                    transitionDelay: `${index * 50}ms, ${index * 50}ms`
                  }}
                >
                  {/* Product Image */}
                  <div className="aspect-square bg-gray-50 relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    {product.isNew && (
                      <div className="absolute top-3 left-3 bg-rose-500 text-white px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide">
                        NEW
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-amber-600 text-xs font-semibold mb-1">{product.category}</p>
                    <h3 className="font-bold text-gray-800 mb-2 leading-snug group-hover:text-amber-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4 flex-grow line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="mt-auto">
                      <p className="text-xs text-gray-400 mb-2">판매업체: {product.businessName}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-bold text-gray-900">
                            {product.price.toLocaleString()}원
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">
                              {product.originalPrice.toLocaleString()}원
                            </span>
                          )}
                        </div>
                        {product.originalPrice && (
                          <div className="bg-rose-100 text-rose-600 px-2 py-0.5 rounded text-xs font-bold">
                            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 transition-opacity duration-500" style={{ opacity: isClient ? 1 : 0 }}>
            <FontAwesomeIcon icon={faShoppingBag} className="text-5xl text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">검색 결과가 없습니다</h3>
            <p className="text-gray-500">다른 검색어나 필터를 사용해보세요.</p>
          </div>
        )}
      </div>
    </div>
  );
} 