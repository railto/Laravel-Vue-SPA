<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'category' => $this->category->name,
            'category_id' => $this->category->id,
            'content' => substr($this->content, 0, 50) . '...',
            'created_at' => $this->created_at->format('Y-m-d'),
        ];
    }
}
