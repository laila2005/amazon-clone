import { motion, AnimatePresence } from "framer-motion"
import { X, Filter, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { useBrands } from "@/hooks/useProducts"

/**
 * ProductsFilterSidebar - A dedicated sidebar for filtering products
 * This is separate from the main responsive sidebar and only appears on the Products page
 */
const ProductsFilterSidebar = ({
  filters,
  onFiltersChange,
  isOpen,
  onToggle
}) => {
  const { data: brands } = useBrands()

  // Handle filter changes
  const updateFilters = updates => {
    onFiltersChange({ ...filters, ...updates })
  }

  // Rating options for filtering
  const ratingOptions = [
    { value: 4, label: "4★ & up" },
    { value: 3, label: "3★ & up" },
    { value: 2, label: "2★ & up" },
    { value: 1, label: "1★ & up" }
  ]

  // Handle brand selection
  const handleBrandToggle = brandId => {
    const newBrands = filters.selectedBrands.includes(brandId)
      ? filters.selectedBrands.filter(id => id !== brandId)
      : [...filters.selectedBrands, brandId]

    updateFilters({ selectedBrands: newBrands })
  }

  // Clear all filters
  const clearAllFilters = () => {
    onFiltersChange({
      searchTerm: "",
      selectedCategory: "all",
      selectedBrands: [],
      minRating: 0,
      priceRange: [0, 1000]
    })
  }

  // Check if any filters are active
  const hasActiveFilters =
    filters.selectedCategory !== "all" ||
    filters.selectedBrands.length > 0 ||
    filters.minRating > 0 ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 1000

  return (
    <>
      {/* Mobile Filter Toggle Button */}
      <div className="lg:hidden mb-4 ">
        <Button
          onClick={onToggle}
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
        >
          <Filter className="w-4 h-4" />
          Filters
          {hasActiveFilters && (
            <Badge variant="secondary" className="ml-2">
              {[
                filters.selectedCategory !== "all" ? 1 : 0,
                filters.selectedBrands.length,
                filters.minRating > 0 ? 1 : 0,
                filters.priceRange[0] > 0 || filters.priceRange[1] < 1000
                  ? 1
                  : 0
              ].reduce((sum, count) => sum + count, 0)}
            </Badge>
          )}
        </Button>
      </div>

      {/* Filter Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 left-0 z-50 w-80 bg-background border-r border-border lg:relative lg:translate-x-0 lg:shadow-none"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 border-b border-border lg:hidden">
              <h3 className="text-lg font-semibold">Filters</h3>
              <Button variant="ghost" size="sm" onClick={onToggle}>
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Filter Content */}
            <div className="p-4 space-y-6 max-h-[calc(100vh-80px)] overflow-y-auto">
              {/* Clear All Filters */}
              {hasActiveFilters && (
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted">Active filters</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllFilters}
                    className="text-primary hover:text-primary-hover"
                  >
                    Clear all
                  </Button>
                </div>
              )}

              {/* Customer Reviews Filter */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">
                  Customer Reviews
                </h4>
                <div className="space-y-2">
                  {ratingOptions.map(option => (
                    <div
                      key={option.value}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={`rating-${option.value}`}
                        checked={filters.minRating === option.value}
                        onCheckedChange={checked => {
                          updateFilters({
                            minRating: checked ? option.value : 0
                          })
                        }}
                      />
                      <label
                        htmlFor={`rating-${option.value}`}
                        className="text-sm text-foreground cursor-pointer flex items-center gap-1"
                      >
                        {option.label}
                        <Star className="w-3 h-3 fill-current text-yellow-400" />
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brands Filter */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Brands</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {brands?.map(brand => (
                    <div key={brand.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`brand-${brand.id}`}
                        checked={filters.selectedBrands.includes(brand.id)}
                        onCheckedChange={() => handleBrandToggle(brand.id)}
                      />
                      <label
                        htmlFor={`brand-${brand.id}`}
                        className="text-sm text-foreground cursor-pointer flex-1"
                      >
                        {brand.name}
                      </label>
                      <Badge variant="secondary" className="text-xs">
                        {brand.productCount}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Price Range</h4>
                <div className="px-2">
                  <Slider
                    value={filters.priceRange}
                    onValueChange={value =>
                      updateFilters({ priceRange: value })
                    }
                    max={1000}
                    min={0}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted mt-2">
                    <span>${filters.priceRange[0]}</span>
                    <span>${filters.priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
    </>
  )
}

export default ProductsFilterSidebar