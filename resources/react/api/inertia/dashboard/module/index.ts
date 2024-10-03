// Types
import type { ModulesUpdateApi } from "@/types/Api/Inertia/Dashboard/Module/Module";

export const modulesUpdateApi = routerService.createInertiaRequest<ModulesUpdateApi>('post', route('dashboard.modules.update'));
