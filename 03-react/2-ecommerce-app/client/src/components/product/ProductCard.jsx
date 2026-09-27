export default function ProductCard({ product }) {
  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-radius bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {product.badge && (
          <span className="absolute left-3 top-3">{product.badge}</span>
        )}
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-medium">{product.name}</h3>

        <div className="mt-2 flex items-center gap-2">
          <span className="font-semibold">${product.price}</span>

          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.oldPrice}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
