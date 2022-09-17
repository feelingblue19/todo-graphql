import { Directive, Field, ObjectType } from "@nestjs/graphql";
import { Todo } from "./todo.entity";

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "_id")')
export class Label {
    @Field((type) => String)
    @Directive('@external')
    _id: string

    @Field((type) => [Todo])
    todos?: Todo[]
}