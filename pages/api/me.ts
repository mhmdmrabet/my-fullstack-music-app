import { validateRoute } from "../../lib/auth";

export default validateRoute((_, response, user) => response.json(user));
