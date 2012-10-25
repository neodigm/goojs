define(['goo/entities/components/TransformComponent', 'goo/entities/components/MeshDataComponent',
		'goo/entities/components/MeshRendererComponent'], function(TransformComponent, MeshDataComponent,
	MeshRendererComponent) {
	"use strict";

	/**
	 * @name EntityUtils
	 * @class Utilities for entity creation etc
	 */
	function EntityUtils() {
	}

	EntityUtils.createTypicalEntity = function(world, meshData) {
		// Create entity
		var entity = world.createEntity();

		// Create transform component
		var transformComponent = new TransformComponent();
		entity.setComponent(transformComponent);

		// Create meshdata component using above data
		var meshDataComponent = new MeshDataComponent(meshData);
		entity.setComponent(meshDataComponent);

		// Create meshrenderer component with material and shader
		var meshRendererComponent = new MeshRendererComponent();
		entity.setComponent(meshRendererComponent);

		return entity;
	};

	return EntityUtils;
});
