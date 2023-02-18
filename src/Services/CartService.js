export class CartService {
    /**
     * @returns {Promise<number>}
     */
    async buyProduct(productId, colorCode, storageCode) {
        const response = await fetch('https://itx-frontend-test.onrender.com/api/cart', {
            method: 'POST',
            //credentials: 'include', // FIXME: Getting CORS error when try to send the session cookie back
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: productId,
                colorCode,
                storageCode,
            })
        })

        const { count } = await response.json()

        return count ?? 0
    }
}
