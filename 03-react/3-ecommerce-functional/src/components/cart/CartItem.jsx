import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CartItem({ item, onRemove, onUpdateQuantity }) {
  return (
    <li className="grid sm:grid-cols-3 items-start gap-4 pb-4 border-b border-slate-300">
      <div className="flex flex-col sm:items-center sm:flex-row gap-6 sm:col-span-2">
        <div className="shrink-0 bg-gray-100 p-2 rounded-md sm:w-28 sm:h-28">
          <img
            src={item.thumbnail}
            className="w-full h-full object-contain"
            alt={item.title}
          />
        </div>

        <div>
          <h3 className="text-base font-semibold text-slate-900">
            {item.title}
          </h3>

          <div className="flex items-center gap-3 my-2">
            <Button
              variant="secondary"
              aria-label={`Remove ${item.title} from cart`}
              onClick={() => onRemove(item.id) }
              className="flex gap-2 items-center"
            >
              <Trash size={16} className="text-red-600" />
              <span className="text-red-600">Remove</span>
            </Button>

            <div className="flex gap-2">
              <div className="flex items-center px-2 py-1 border border-slate-300 text-slate-900 text-xs rounded-md">
                <Button variant="secondary" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                  <MinusCircle size={14} />
                </Button>

                <span className="mx-3 font-semibold text-lg">
                  {item.quantity}
                </span>

                <Button variant="secondary" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                  <PlusCircle size={14} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:ml-auto">
        <h3 className="text-base font-semibold text-slate-900">
          ${(item.price * item.quantity).toFixed(2)}
        </h3>
      </div>
    </li>
  );
}
