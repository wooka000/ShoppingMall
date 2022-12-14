import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCart, updateToCart, removeCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();
  const cartQuery = useQuery(["carts", uid || ""], () => getCart(uid), {
    enabled: !!uid,
  });

  const updateCart = useMutation((product) => updateToCart(uid, product), {
    onSuccess: () => {
      queryClient.invalidateQueries(["carts", uid]);
    },
  });

  const removeItem = useMutation((id) => removeCart(uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["carts", uid]);
    },
  });

  return { cartQuery, updateCart, removeItem };
}
