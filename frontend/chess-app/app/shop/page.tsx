import React from "react";

const products = [
    {
        id: 1,
        title: "Premium Wooden Chess Set",
        description: "Handcrafted Staunton pieces with a beautiful mahogany board. Perfect for serious players.",
        price: "$129.99",
        image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=800",
        affiliateLink: "#",
    },
    {
        id: 2,
        title: "DGT 3000 Chess Clock",
        description: "The official chess clock of the World Chess Federation. Highly accurate and reliable.",
        price: "$89.99",
        image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=800",
        affiliateLink: "#",
    },
    {
        id: 3,
        title: "Bobby Fischer Teaches Chess",
        description: "The best-selling chess book of all time. A must-read for beginners and experts alike.",
        price: "$15.99",
        image: "https://images.unsplash.com/photo-1590846406792-0adc7f928f1e?auto=format&fit=crop&q=80&w=800",
        affiliateLink: "#",
    },
    {
        id: 4,
        title: "Magnetic Travel Chess Set",
        description: "Compact and magnetic, ideal for playing on the go. Fits easily in any backpack.",
        price: "$24.99",
        image: "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?auto=format&fit=crop&q=80&w=800",
        affiliateLink: "#",
    },
];

export default function ShopPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Chess<span className="text-emerald-500">Shop</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Upgrade your game with our handpicked selection of premium chess gear and resources.
                        Purchasing through these links helps support ChessOn.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-[#1a1c20] rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20 flex flex-col"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c20] to-transparent opacity-80" />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white leading-tight">
                                        {product.title}
                                    </h3>
                                </div>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                    {product.description}
                                </p>

                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-2xl font-bold text-emerald-400">
                                        {product.price}
                                    </span>
                                    <a
                                        href={product.affiliateLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-white/5 hover:bg-emerald-500 text-white text-sm font-semibold rounded-lg transition-colors duration-300 border border-white/10 hover:border-transparent flex items-center gap-2"
                                    >
                                        Buy Now
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
