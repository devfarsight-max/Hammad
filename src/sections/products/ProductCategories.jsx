export default function ProductCategories({ categories, selected, onChange }) {
  return <div className="filter-row" role="group" aria-label="Filter by product category">
    {categories.map((category) => <button key={category} type="button" aria-pressed={selected === category}
      onClick={() => onChange(category)}>{category}</button>)}
  </div>
}
