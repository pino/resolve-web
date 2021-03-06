import { Routes } from "@angular/router";
import { NewPostComponent } from "./new-post.component";
import { PostListComponent } from "./post-list.component";
import { AuthGuard } from "../../auth-guard.component";
import { PostDetailComponent } from "./post-detail.component";
import { ReportListComponent } from "./report-list.component";
import { UserPostsListComponent } from "./user-posts-list.component";

export const PostRoutes: Routes = [
	{
		path: 'new-post',
		component: NewPostComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'post-list',
		component: PostListComponent
	},
	{
		path: 'post/:id',
		component: PostDetailComponent
	},
	{
		path: 'report-list',
		component: ReportListComponent,
		canActivate: [AuthGuard]
	},
	{
		path: '',
		redirectTo: '/post-list',
		pathMatch: 'full'
	},
	{
		path: 'user-posts-list/:id',
		component: UserPostsListComponent,
		canActivate: [AuthGuard]
	}
];