import { requiredUser } from "@/hooks/requiredUser";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const OrdersPage = async () => {
    await requiredUser();
    return <div className="">OrdersPage</div>;
};

export default OrdersPage;
